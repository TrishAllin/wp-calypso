/**
 * External dependencies
 */
import React from 'react';
import Gridicon from 'gridicons';
import { localize } from 'i18n-calypso';
import classNames from 'classnames';
import { includes } from 'lodash';

/**
 * Internal dependencies
 */
import Button from 'components/button';
import CommentLikes from 'blocks/comment-likes';

const commentActions = {
	unapproved: [ 'like', 'approve', 'edit', 'spam', 'trash' ],
	approved: [ 'like', 'approve', 'edit', 'spam', 'trash' ],
	spam: [ 'approve', 'edit', 'delete' ],
	trash: [ 'approve', 'edit', 'spam', 'delete' ],
};

const hasAction = ( status, action ) => includes( commentActions[ status ], action );

export const CommentDetailActions = ( {
	siteId,
	postId,
	commentId,
	edit,
	commentStatus,
	deleteCommentPermanently,
	toggleApprove,
	toggleLike,
	toggleSpam,
	toggleTrash,
	translate,
} ) => {
	const isApproved = 'approved' === commentStatus;
	const isSpam = 'spam' === commentStatus;
	const isTrash = 'trash' === commentStatus;

	return (
		<div className="comment-detail__actions">
			{ hasAction( commentStatus, 'like' ) &&
				<CommentLikes { ...{ siteId, postId, commentId, commentStatus, toggleLike } } />
			}

			{ hasAction( commentStatus, 'approve' ) &&
				<Button
					borderless
					className={ classNames( 'comment-detail__action-approve', { 'is-approved': isApproved } ) }
					onClick={ toggleApprove }
				>
					<Gridicon icon={ isApproved ? 'checkmark-circle' : 'checkmark' } />
					<span>{
						isApproved
							? translate( 'Approved' )
							: translate( 'Approve' )
					}</span>
				</Button>
			}

			{ hasAction( commentStatus, 'edit' ) &&
				<Button
					borderless
					className="comment-detail__action-edit"
					onClick={ edit }
				>
					<Gridicon icon="pencil" />
					<span>{ translate( 'Edit' ) }</span>
				</Button>
			}

			{ hasAction( commentStatus, 'spam' ) &&
				<Button
					borderless
					className={ classNames( 'comment-detail__action-spam', { 'is-spam': isSpam } ) }
					onClick={ toggleSpam }
				>
					<Gridicon icon="spam" />
					<span>{
						isSpam
							? translate( 'Spammed' )
							: translate( 'Spam' )
					}</span>
				</Button>
			}

			{ hasAction( commentStatus, 'trash' ) &&
				<Button
					borderless
					className={ classNames( 'comment-detail__action-trash', { 'is-trash': isTrash } ) }
					onClick={ toggleTrash }
				>
					<Gridicon icon="trash" />
					<span>{
						isTrash
							? translate( 'Trashed' )
							: translate( 'Trash' )
					}</span>
				</Button>
			}

			{ hasAction( commentStatus, 'delete' ) &&
				<Button
					borderless
					className="comment-detail__action-delete"
					onClick={ deleteCommentPermanently }
				>
					<Gridicon icon="trash" />
					<span>{ translate( 'Delete Permanently' ) }</span>
				</Button>
			}
		</div>
	);
};

export default localize( CommentDetailActions );

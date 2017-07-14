/**
 * External dependencies
 */
import { localize } from 'i18n-calypso';
import React, { PropTypes } from 'react';

/**
 * Internal dependencies
 */
import DocumentHead from 'components/data/document-head';
import EmptyContent from 'components/empty-content';
import Main from 'components/main';
import SidebarNavigation from 'my-sites/sidebar-navigation';

const NoPermissionsError = ( { title, translate } ) => (
	<Main>
		<DocumentHead title={ title } />
		<SidebarNavigation />
		<EmptyContent
			title={ translate( 'Oops! You don\'t have permission to manage plugins.' ) }
			line={ translate( 'If you think you should, contact this site\'s administrator.' ) }
			illustration="/calypso/images/illustrations/illustration-500.svg" />
	</Main>
);

NoPermissionsError.propTypes = {
	translate: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired
};

export default localize( NoPermissionsError );

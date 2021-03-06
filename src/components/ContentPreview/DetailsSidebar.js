/**
 * @flow
 * @file Details sidebar component
 * @author Box
 */

import React from 'react';
import SidebarSection from './SidebarSection';
import FileProperties from '../FileProperties';
import SidebarContent from './SidebarContent';
import SidebarSkills from './SidebarSkills';
import type { BoxItem } from '../../flowTypes';
import './DetailsSidebar.scss';

type Props = {
    file: BoxItem,
    getPreviewer: Function,
    getLocalizedMessage: Function
};

/* eslint-disable jsx-a11y/label-has-for */
const DetailsSidebar = ({ file, getPreviewer, getLocalizedMessage }: Props) =>
    <SidebarContent title={getLocalizedMessage('buik.preview.sidebar.details.title')}>
        <SidebarSkills metadata={file.metadata} getPreviewer={getPreviewer} getLocalizedMessage={getLocalizedMessage} />
        <SidebarSection isOpen={false} title={getLocalizedMessage('buik.preview.sidebar.details.properties')}>
            <FileProperties file={file} getLocalizedMessage={getLocalizedMessage} />
        </SidebarSection>
    </SidebarContent>;

export default DetailsSidebar;

// <div className='bcpr-sidebar-details-description'>
// <label>
//     <span>
//         {getLocalizedMessage('buik.preview.sidebar.details.description')}
//     </span>
//     <textarea
//         readOnly
//         placeholder={getLocalizedMessage('buik.preview.sidebar.details.description.placeholder')}
//         defaultValue={file.description}
//     />
// </label>
// </div>

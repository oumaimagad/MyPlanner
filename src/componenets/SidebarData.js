import React from 'react'
import WindowIcon from '@mui/icons-material/Window';
import TaskIcon from '@mui/icons-material/Task';
import ReportIcon from '@mui/icons-material/Report';
import AllOutIcon from '@mui/icons-material/AllOut';
import GradingIcon from '@mui/icons-material/Grading';
 export const SidebarData = [
    {
      title:"Myday",
      icon:<WindowIcon />,
      Link:"/myday",
    },
    {
        title:"Task",
        icon:<TaskIcon />,
        Link:"/task",
      },
      {
        title:"Important",
        icon:<ReportIcon/>,
        Link:"/important",
      },
      {
        title:"All",
        icon:<AllOutIcon />,
        Link:"/all",
      },
      {
        title:"Completed",
        icon:<GradingIcon />,
        Link:"/completed",
      },
 ];
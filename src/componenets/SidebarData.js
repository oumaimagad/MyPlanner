// Importe les icônes nécessaires depuis la bibliothèque '@mui/icons-material'.
import WindowIcon from '@mui/icons-material/Window';
import TaskIcon from '@mui/icons-material/Task';
import ReportIcon from '@mui/icons-material/Report';
import AllOutIcon from '@mui/icons-material/AllOut';
import GradingIcon from '@mui/icons-material/Grading';

// Définit un tableau d'objets représentant les données de la barre latérale.
export const SidebarData = [
  {
    // Première entrée: Myday
    title: "Myday", // Titre de l'élément
    icon: <WindowIcon />, // Icône associée à l'élément, utilisant l'importation de l'icône WindowIcon
    Link: "/myday", // Lien associé à l'élément
  },
  {
    // Deuxième entrée: Task
    title: "Task", // Titre de l'élément
    icon: <TaskIcon />, // Icône associée à l'élément, utilisant l'importation de l'icône TaskIcon
    Link: "/task", // Lien associé à l'élément
  },
  {
    // Troisième entrée: Important
    title: "Important", // Titre de l'élément
    icon: <ReportIcon />, // Icône associée à l'élément, utilisant l'importation de l'icône ReportIcon
    Link: "/important", // Lien associé à l'élément
  },
  {
    // Quatrième entrée: All
    title: "All", // Titre de l'élément
    icon: <AllOutIcon />, // Icône associée à l'élément, utilisant l'importation de l'icône AllOutIcon
    Link: "/all", // Lien associé à l'élément
  },
  {
    // Cinquième entrée: Completed
    title: "Completed", // Titre de l'élément
    icon: <GradingIcon />, // Icône associée à l'élément, utilisant l'importation de l'icône GradingIcon
    Link: "/completed", // Lien associé à l'élément
  },
];

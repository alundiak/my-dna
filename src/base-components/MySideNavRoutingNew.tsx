import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { sideNavData } from '../shared/constant';

interface NavItemModel {
  id: string;
  label: string;
}

export function MySideNavRoutingNew() {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <nav>
        {/* <Link component={RouterLink} to="/"> */}
        <List dense>
          {sideNavData.map((item: NavItemModel, index) => {
            const path = item.id === 'my-ftdna-projects' ? '' : item.id;
            return (
              <ListItem disablePadding key={item.id}>
                <ListItemButton
                  component="a"
                  href={`#${path}`}
                  selected={selectedIndex === index}
                  onClick={() => handleListItemClick(index)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
}

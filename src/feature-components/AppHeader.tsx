import { Grid, Typography } from '@mui/material';
import './appHeader.css';

export function AppHeader() {
  return (
    <header>
      <Typography variant="h4" gutterBottom id="home" color="success">
        my DNA info (FTDNA, YFULL, SNP Tracker)
      </Typography>
      <Grid container spacing={2}>
        <div>
          <p>
            <a
              href="https://www.familytreedna.com/group-project-search"
              target="_blank"
            >
              FamilyTreeDNA Group Projects Search
            </a>
          </p>
        </div>

        <div>
          <p>
            <a
              href="https://www.familytreedna.com/group-administrator-directory"
              target="_blank"
            >
              Group Administrator Directory
            </a>
            <br />
            <small>
              (some projects are NOT enabled to be found but they listed here)
            </small>
          </p>
        </div>

        <div>
          <p>
            <a
              href="https://www.familytreedna.com/my/group-join"
              target="_blank"
            >
              My FamilyTreeDNA "Join a Project" feature
            </a>
          </p>
        </div>

        <div>
          <p>
            <a
              href="https://www.familytreedna.com/project-application.aspx"
              target="_blank"
            >
              Create FamilyTreeDNA Project
            </a>
          </p>
        </div>
      </Grid>
    </header>
  );
}

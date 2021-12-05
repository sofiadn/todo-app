import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  app: {
    textAlign: 'center',
  },
}));

export default function App() {

  const classes = useStyles();
 
  return (
    <div className={classes.app}>
        <p>
          Let's start writing our todo app! 
        </p>
    </div>
  );
}


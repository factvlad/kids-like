import s from "./style.module.scss"

export const App = () => {
  return (
    <div className={ s.div }
      style={ {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      } }
    >
      Kids Like
    </div>
  );
};

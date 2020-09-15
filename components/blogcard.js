import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    width: '100%',
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
  },
  media: {
    borderRadius: 6,
  },
}));

export const MusicCardDemo = React.memo(function MusicCard(props) {
  const styles = useStyles();
  //console.log(props);
  const newpost = props.props;
  const imgs = props.props;
  const img = imgs.photos;
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  return (
    <Card key={newpost.id} className={cx(styles.root, shadowStyles.root)}>
      <CardMedia className={cx(styles.media, mediaStyles.root)} image={img.publicUrl} />
      <CardContent className="cardd">
        <TextInfoContent
          classes={textCardContentStyles}
          overline={newpost.categories.name}
          heading={newpost.name}
          body=""
        />
      </CardContent>
    </Card>
  );
});
export default MusicCardDemo;

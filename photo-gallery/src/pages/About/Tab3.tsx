import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About Ionic App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About Ionic App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Documentation about UI Ionic Components" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

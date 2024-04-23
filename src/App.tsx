import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calculatorOutline, closeOutline, ellipse, home, homeOutline, personCircleOutline, personOutline, speedometerOutline, square, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
  <IonReactRouter>
  <IonTabs>
  <IonRouterOutlet>

          {/* Application default route */}
  <Route exact path="/">
  <Redirect to="/Home" />
  </Route>
          {/* Home Router */}
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Calculator" component={Calculator} />
          {/*<Route exact path="/Profile" component={Profile} />
          <Route exact path="/Clickcounter" component={Clickcounter}/> */}
   
    <Route exact path="/Calculator">
    <Calculator />
    </Route>
    <Route exact path="/tab2">
    <Tab2 />
    </Route>
    <Route path="/tab3">
    <Tab3 />
    </Route>
    <Route exact path="/">
    <Redirect to="/tab1" />
    </Route>
    </IonRouterOutlet>

    <IonTabBar slot="bottom">

      {/* Home Tab Button */}
      <IonTabButton tab="Home" href="/Home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Calculator" href="/Calculator">
            <IonIcon aria-hidden="true" icon={closeOutline} />
            <IonLabel>Blank</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={personCircleOutline} />
            <IonLabel>Info</IonLabel>
          </IonTabButton>
          
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

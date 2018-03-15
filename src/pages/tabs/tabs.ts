import { Component } from '@angular/core';

import { JogadoresPage } from '../jogadores/jogadores';
import { DetalhesPage } from '../detalhes/detalhes';
import { FavoritosPage } from '../favoritos/favoritos';
import { IntroPage } from '../intro/intro';

// import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = JogadoresPage;
  tab2Root = FavoritosPage;
  tab3Root = DetalhesPage;
  tab4Root = IntroPage;


  constructor() {

  }
}

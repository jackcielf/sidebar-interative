import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-name-items',
  templateUrl: './form-name-items.component.html',
  styleUrls: ['./form-name-items.component.scss'],
})
export class FormNameItemsComponent implements OnInit {
  items = [
    { icon: 'home', value: 'home', viewValue: 'Início' },
    { icon: 'contacts', value: 'contacts', viewValue: 'Contatos' },
    { icon: 'home', value: 'login', viewValue: 'Logar' },
    { icon: 'home', value: 'register', viewValue: 'Cadastrar' },
    { icon: 'account_circle', value: 'myprofile', viewValue: 'Meu perfil' },
    { icon: 'exit_to_app', value: 'exitaccount', viewValue: 'Sair da conta' },
    { icon: 'settings', value: 'settings', viewValue: 'Configurações' },
    { icon: 'shopping_basket', value: 'shop', viewValue: 'Shop' },
    { icon: 'contact_support', value: 'support', viewValue: 'Suporte' },
    { icon: 'person', value: 'user', viewValue: 'Usuário' },
    {
      icon: 'open_in_new',
      value: 'redirectto',
      viewValue: 'Redirecionar para...',
    },
    { icon: 'beenhere', value: 'saved', viewValue: 'Salvo' },
    { icon: 'error', value: 'aboutus', viewValue: 'Sobre nós' },
    { icon: 'mail', value: 'myemail', viewValue: 'Meu e-mail' },
    { icon: 'sms', value: 'chat', viewValue: 'Chat' },
    { icon: 'create_new_folder', value: 'newfolder', viewValue: 'Nova pasta' },
    { icon: 'image', value: 'gallery', viewValue: 'Galeria' },
    {
      icon: 'add_photo_alternate',
      value: 'addimg',
      viewValue: 'Adicionar imagem',
    },
    { icon: 'check', value: 'products', viewValue: 'Produtos' },
    { icon: 'forum', value: 'forum', viewValue: 'Fórum' },
    { icon: 'thumb_down', value: 'like', viewValue: 'Marcados com gostei' },
    { icon: 'thumb_up', value: 'nolike', viewValue: 'Marcados com não gostei' },
    { icon: 'map', value: 'location', viewValue: 'Localização' },
    {
      icon: 'supervisor_account',
      value: 'myfriends',
      viewValue: 'Meus amigos',
    },
    { icon: 'local_atm', value: 'services', viewValue: 'Serviços' },
    { icon: 'local_mall', value: 'buy', viewValue: 'Comprar' },
    { icon: 'payment', value: 'payment', viewValue: 'Pagamento' },
    { icon: 'search', value: 'search', viewValue: 'Pesquisar' },
    {
      icon: 'add_shopping_cart',
      value: 'addcart',
      viewValue: 'Adicionar ao carrinho',
    },
    { icon: 'help', value: 'help', viewValue: 'Ajuda' },
    { icon: 'brightness_6', value: 'brightness', viewValue: 'Brilho' },
  ];

  numberItems: number;

  // @ViewChild('select') boxSelect: ElementRef;

  // exe = [
  //   { id: 1, exValue: '' },
  //   { id: 2, exValue: '' },
  //   { id: 3, exValue: '' },
  //   { id: 4, exValue: '' },
  //   { id: 5, exValue: '' },
  //   { id: 6, exValue: '' },
  // ];

  // items = [
  //   { icon: 'home', viewValue: 'Início' },
  //   { icon: 'contacts', viewValue: 'Contatos' },
  //   { icon: 'home', viewValue: 'Logar' },
  //   { icon: 'home', viewValue: 'Cadastrar' },
  //   { icon: 'account_circle', viewValue: 'Meu perfil' },
  //   { icon: 'exit_to_app', viewValue: 'Sair da conta' },
  //   { icon: 'settings', viewValue: 'Configurações' },
  //   { icon: 'shopping_basket', viewValue: 'Shop' },
  //   { icon: 'contact_support', viewValue: 'Suporte' },
  //   { icon: 'person', viewValue: 'Usuário' },
  //   {
  //     icon: 'open_in_new',
  //     viewValue: 'Redirecionar para...',
  //   },
  //   { icon: 'beenhere', viewValue: 'Salvo' },
  //   { icon: 'error', viewValue: 'Sobre nós' },
  //   { icon: 'mail', viewValue: 'Meu e-mail' },
  //   { icon: 'sms', viewValue: 'Chat' },
  //   { icon: 'create_new_folder', viewValue: 'Nova pasta' },
  //   { icon: 'image', viewValue: 'Galeria' },
  //   {
  //     icon: 'add_photo_alternate',
  //     viewValue: 'Adicionar imagem',
  //   },
  //   { icon: 'check', viewValue: 'Produtos' },
  //   { icon: 'forum', viewValue: 'Fórum' },
  //   { icon: 'thumb_down', viewValue: 'Marcados com gostei' },
  //   { icon: 'thumb_up', viewValue: 'Marcados com não gostei' },
  //   { icon: 'map', viewValue: 'Localização' },
  //   {
  //     icon: 'supervisor_account',
  //     viewValue: 'Meus amigos',
  //   },
  //   { icon: 'local_atm', viewValue: 'Serviços' },
  //   { icon: 'local_mall', viewValue: 'Comprar' },
  //   { icon: 'payment', viewValue: 'Pagamento' },
  //   { icon: 'search', viewValue: 'Pesquisar' },
  //   {
  //     icon: 'add_shopping_cart',
  //     viewValue: 'Adicionar ao carrinho',
  //   },
  //   { icon: 'help', viewValue: 'Ajuda' },
  //   { icon: 'brightness_6', viewValue: 'Brilho' },
  // ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.numberItems = Number(this.route.snapshot.paramMap.get('number'));
  }

  saveSidenav() {
    while (this.numberItems > 0) {
      let select = document.getElementById('1');
      console.log(select.textContent);
      this.numberItems--;
    }
  }

  changeV(e: any) {
    console.log(e);
  }
}

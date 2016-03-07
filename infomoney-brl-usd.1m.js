#!/usr/bin/env /Users/douglas/.nvm/versions/node/v5.7.1/bin/node
// Simple Currency tracker between BRL and USD fetching the values from http://www.infomoney.com.br/mercados/cambio
//
// <bitbar.title>infomoney-brl-usd</bitbar.title>
// <bitbar.version>v0.1</bitbar.version>
// <bitbar.author>Douglas Silvio Correa</bitbar.author>
// <bitbar.author.github>douglascorrea</bitbar.author.github>
// <bitbar.desc>Simple Currency tracker between BRL and USD fetching the values from http://www.infomoney.com.br/mercados/cambio</bitbar.desc>

const bitbar = require('bitbar');

var Xray = require('x-ray');
var xray = Xray();

xray('http://www.infomoney.com.br/mercados/cambio', {
    turismoCompra: '#artQuotes .tabelas tbody tr:nth-child(2) td:nth-child(4)',
    turismoVenda: '#artQuotes .tabelas tbody tr:nth-child(2) td:nth-child(5)',
    comercialCompra: '#artQuotes .tabelas tbody tr:nth-child(1) td:nth-child(4)',
    comercialVenda: '#artQuotes .tabelas tbody tr:nth-child(1) td:nth-child(5)'
})(populateBar);

function populateBar(err, content) {
    bitbar([
        {
            text: content.turismoCompra,
            color: bitbar.darkMode ? 'white' : 'red',
            dropdown: false

        },
        bitbar.sep,
        {
            text: 'Turismo - Compra  - ' + content.turismoCompra,
            color: bitbar.darkMode ? 'white' : 'red',
            href: 'http://www.infomoney.com.br/mercados/cambio'

        },
        {
            text: 'Turismo - Venda  - ' + content.turismoVenda,
            color: bitbar.darkMode ? 'white' : 'red',
            href: 'http://www.infomoney.com.br/mercados/cambio'

        },
        bitbar.sep,
        {
            text: 'Comercial - Compra  - ' + content.comercialCompra,
            color: bitbar.darkMode ? 'white' : 'red',
            href: 'http://www.infomoney.com.br/mercados/cambio'

        },
        {
            text: 'Comercial - Venda  - ' + content.comercialVenda,
            color: bitbar.darkMode ? 'white' : 'red',
            href: 'http://www.infomoney.com.br/mercados/cambio'

        }
    ]);
}



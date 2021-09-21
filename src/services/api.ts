/*essa pasta ira conter a api:
em services podemos colocar elementos como: 
a)dados de databases
b)apis externas
c)apis em geral
para isso, usaremos o axios para gerenciar as rotas http
com axios nao precisamos tambem nos preocupar em transformar as respostas do fetch em json
para chamar o axios basta fazer o seguinte:
*/

import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})
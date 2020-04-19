import React, { useState } from 'react';

import './abautUs.css';

export default function AbautUs() {

    const umbanda = 'A umbanda é uma religião afro-brasileira, que sincretiza o catolicismo, espiritismo e religiosidades africanas, indianas e indígenas. Muitas vezes é confundida com o Candomblé e a Quimbanda, mas possui princípios, ensinamentos e rituais diferentes das demais.\n \n Além disso, a Umbanda possui diversas vertentes mas, de forma geral, os Orixás são a manifestação divina através de espíritos, chamados de guias ou entidades. Provavelmente você já ouviu falar em falanges, entidades espirituais, chefes de terreiro, pai de santo, mãe de santo, preto velho, pomba gira, passe, entre tantos outros termos. \n \n A estrutura da Umbanda se baseia em três princípios: fraternidade, caridade e respeito ao próximo.';
    const orixas = 'A religião de Umbanda cultua os mesmos Orixás do panteão africano, os mesmos cultuados pelos povos de nação Kêtu/Nagô nos Candomblés, sendo que estes nossos irmãos fazem isso há muito mais tempo que os umbandistas. Apesar de os Orixás serem os mesmos, é na forma de cultuá-los que está a diferença. \n \nDesenvolvemos abaixo, uma tabela para cada Orixá, que traz diversas informações sobre o culto destas divindades na Umbanda, suas cores, velas, domínios, oferendas, datas votivas, entre outras. Ainda acrescentamos alguns Itãs, histórias mitológicas que eram passadas de pai para filho de forma oral.';
    const ervas = 'Kosi Ewé, Kosi Orixá (sem erva, sem Orixá). É assim que se diz entre o povo de santo, quando se quer fazer referência ao Orixá das Ervas, aquele que detém o poder mágico de todas elas, Ossain, pois sem as ervas não tem axé, não tem culto a Orixá, não tem Umbanda. \n \nEstá aí a regra número um nos cultos de Orixá e a Umbanda é um deles. Contudo, no Barracão de Pai José, sempre prego que nosso uso é mágico e não medicinal, receitamos as ervas para sacudimentos, defumações, banhos, mas nunca para uso fitoterápico, por ingestão. \n \nOs banhos, defumações, sacudimentos, entre outras mirongas que fazem uso destas plantas são passados pelas entidades, os Guias de Luz, nos trabalhos de atendimento ao público.';
    const terreiro = 'Com inauguração no mês de julho/2018, o Terreiro Casa de Xangô e Iansã vem através de seu fundador, trazendo a umbanda com base no Amor, Fé, Caridade e Respeito. \n \nAssim como tudo na vida nada é fácil, nosso início foi pequeno, apertado e localizado em um fundo de quintal, mas naquele momento nascia uma família com amor e carinho, hoje com sede própria na zona leste de São Paulo o terreiro ministra diversos cursos para filhos e adeptos da religião além de receber dezenas de pessoas em seus trabalhos abertos ao público.';
    const zelador = 'Anderson Munhoz, é casado, médium e sacerdote de Umbanda, atuante desde 2005, fundador do Terreiro Casa de Xangô e Iansã, onde semanalmente abre as portas de sua casa para trabalhos espirituais e atendimento ao público. \n \nDefensor da Umbanda, vem implantando uma nova metodologia de conhecer e cultuar a religião. Tutor de cursos, que além de agregar conhecimentos, faz com que seus filhos e amigos consulentes saibam como é simples e fácil o culto de Umbanda.';

    const [isText, setIsText] = useState();

    return (
        <div className="inicio-conteiner">
            <div className="space"></div>
            <div className="information">
                <div className="abautUs">
                    <h1>Sobre Nós</h1>
                    <ul id="">
                        <li onClick={e => setIsText(umbanda)}>A Umbanda</li>
                        <li onClick={e => setIsText(orixas)}>Os Orixás</li>
                        <li onClick={e => setIsText(ervas)}>As Ervas</li>
                        <li onClick={e => setIsText(terreiro)}>O Terreiro</li>
                        <li onClick={e => setIsText(zelador)}>O Zelador</li>
                    </ul>
                </div>
                <div className="abautUs textInf">
                    <p className="">{isText}</p>
                </div>
            </div>
        </div>
    )
}
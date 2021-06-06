import './App.css'

import First from "./components/basics/First";
import WithProperty from "./components/basics/WithProperty";
import Fragment from "./components/basics/Fragment";
import Aleatory from "./components/basics/Aleatory";
import Card from "./components/layout/Card";
import Family from './components/basics/Family';
import Member from './components/basics/MemberFamily'
import StudentsList from './components/repetion/StudentsList';
import ProductList from './components/repetion/ProductList';
import EvenOrOdd from './components/conditional/EvenOrOdd';
import UserInfo from './components/conditional/UserInfo';
import DirectFather from './components/comunication/DirectFather';
import IndirectFather from './components/comunication/IndirectFather';
import Input from './components/form/Input';

export default function App(props) {
  return (
    <div className="App">
      <h1>React Fundaments</h1>

      <div className="Cards">

        <Card titulo="#11 Controlled component" color="#e45f56">
          <Input />
        </Card>
        <Card titulo="#10 Indirect communication" color="#8bad39">
          <IndirectFather />
        </Card>
        <Card titulo="#09 Direct communication" color="#59323c">
          <DirectFather />
        </Card>
        <Card titulo="#08 Conditional rendering" color="#982395">
          <EvenOrOdd number={21}/>
          <UserInfo usuario={{name: 'Daniel'}}/>
          {/* <UserInfo usuario={{email: 'Daniel'}}/> */}
        </Card>
        <Card titulo="#07 Repetion challenge" color="#3a9ad9">
          <ProductList />
        </Card>
        <Card titulo="#06 Repetion" color="#FF4C65">
          <StudentsList />
        </Card>
        <Card titulo="#05 Component with child" color="#00c8f8">
          <Family sobrenome="Santos">
            <Member nome="Felipe"/>
            <Member nome="Bruno"/>
            <Member nome="Gabriel" />
            <Member nome="Daniel" />
          </Family>
        </Card>
        <Card titulo="#04 leatory challeng" color="#FA6900">
          <Aleatory min={10} max={11} />
        </Card>
        <Card titulo="#03 Fragment" color="#E94C6F">
          <Fragment />
        </Card>
        <Card titulo="#02 With Property" color="#E8B71A">
          <WithProperty titulo="Student situation" aluno="Dan" nota={10} />
        </Card>
        <Card titulo="#01 Firsty component" color="#588C73">
          <First />
        </Card>
      </div>
    </div>
  );
}

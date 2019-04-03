import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import {
  Form, Select, Input, Button, Carousel, Card, Icon, Menu
} from 'antd';

import firstCarousel from './static/images/ballet.jpg';
import secondCarousel from './static/images/concert.jpg';
import thirdCarousel from './static/images/dancers.jpg';
import musician from './static/images/musician.jpg';
import dancer from './static/images/dancer.jpg';
import musicianWoman from './static/images/musician-woman.jpg';
import painter from './static/images/painter.jpg';
const { Meta } = Card;
const { Option } = Select;
class App extends Component {


  render() {
    return (
      <div className="App">
<header>
<h1 ><Icon type="rocket" />ColArt</h1>
        <h2>Te presentamos las diversas formas de entretenimiento artístico y cultural.</h2>
        </header>
       

       
<sider>
  
        <Form  style={{float:'right'}} >
     
        <Form.Item label="Nombre">

        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre" />
</Form.Item>
<Form.Item label="Correo electrónico">
<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Correo" />

</Form.Item>
<Form.Item label="Contraseña">
<Input.Password placeholder="Ingresa contraseña" />
</Form.Item>
<Form.Item>
<Button type="primary" >Sé parte de ColArt!</Button>
</Form.Item>
</Form>
</sider>




<content>
        <Carousel autoplay style={{width:70}}>
          <div>
            <img alt="example" src={firstCarousel} style={{ width: 1180 }}></img>
          </div>
          <div>
          <img alt="example" src={secondCarousel} style={{ width: 1180 }}></img>
          </div>
          <div>
          <img alt="example" src={thirdCarousel} style={{ width: 1180 }}></img>
          </div>
     
        </Carousel>

        <Card title="Artistas destacados  " style={{textAlign:"center"}}>
          <Card.Grid style={gridStyle}>

            <Card
              hoverable
              style={{ width: 240, gridStyle }}
              cover={<img alt="example" style={gridImgStyle} src={musicianWoman} />}
            >
              <Meta
                title="Carolina Sierra - Cantante"
                description="Apasionada por la música. Rock<3"
              />
            </Card>
          </Card.Grid>

          <Card.Grid style={gridStyle}>

            <Card
              hoverable
              style={{ width: 240, gridStyle }}
              cover={<img alt="example" style={gridImgStyle} src={musician} />}
            >
              <Meta
                title="Juan Agudelo - Guitarrista"
                description="Me gusta hacer los mejores solos de guitarra. Jazz!!"
              />
            </Card>
          </Card.Grid>

          <Card.Grid style={gridStyle}>

            <Card
              hoverable
              style={{ width: 240, gridStyle }}
              cover={<img alt="example" style={gridImgStyle} src={dancer} />}
            >
              <Meta
                title="Juanita Rendón - Bailarina"
                description="Me encanta la danza de mi tierra."
              />
            </Card>
          </Card.Grid>
          <Card.Grid style={gridStyle}>

            <Card
              hoverable
              style={{ width: 240, gridStyle }}
              cover={<img alt="example" style={gridImgStyle} src={painter}/>}
            >
              <Meta
                title="Mariana Valencia - Pintora"
                description="Me gusta el arte grecorromano."
              />
            </Card>
          </Card.Grid>


        </Card>

        </content>


      </div>
    );
  }
}

const gridImgStyle = {

  height: 300,
  textAlign: 'center'
};
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

export default App;

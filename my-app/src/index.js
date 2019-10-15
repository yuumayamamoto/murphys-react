import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header,Menu,Image,Icon, Grid ,List} from 'semantic-ui-react';


class Reacthead extends React.Component {
  render() {
    return (
        <Menu borderless className = "topmenu" >
          <Menu.Item><Image src = "http://murphyshawaii.com/media/2014/04/murphyshawaii.png"></Image></Menu.Item>
          <Menu.Item position = "right"> home</Menu.Item>
          <Menu.Item> About us<Icon name ="dropdown"></Icon></Menu.Item>
          <Menu.Item> St.Patrick's Day</Menu.Item>
          <Menu.Item> Menus<Icon name ="dropdown"></Icon></Menu.Item>
          <Menu.Item> Bar</Menu.Item>
          <Menu.Item> <Icon name = "search"> </Icon> </Menu.Item>

        </Menu>
    )
  }
}

class Reactmain extends React.Component {
  render() {
    return (
       <div className={"murphys-background"}>
         <Grid columns ="2">
           <Grid.Column>
             <Image src = "http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png"></Image>
           </Grid.Column>
           <Grid.Column>
             <h2>A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block off the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.</h2>

         </Grid.Column>
         </Grid>
       </div>
    )
  }
}
class Reactfoot extends React.Component {
  render() {
    return (
        <div className={"footer-background"}>
          <Grid stackable >
            <Grid.Column></Grid.Column>
              <Grid.Column width = "4" >  Lunch <hr/>
                <List>
                  <List.Item>Monday – Friday: 11:00am – 2:30pm</List.Item>
                  <List.Item>Saturday – Sunday: Not open for lunch</List.Item>
              </List>
              </Grid.Column>
            <Grid.Column></Grid.Column>
                <Grid.Column width ="4" >  Lunch <hr/>
                  <List>
                    <List.Item>Monday – Friday: 11:00am – 2:30pm</List.Item>
                    <List.Item>Saturday – Sunday: Not open for lunch</List.Item>
                  </List>
                </Grid.Column>
            <Grid.Column></Grid.Column>
              <Grid.Column width ="4" >
                  Lunch <hr/>
                  <List>
                    <List.Item>Monday – Friday: 11:00am – 2:30pm</List.Item>
                    <List.Item>Saturday – Sunday: Not open for lunch</List.Item>
                  </List>

              </Grid.Column>
          </Grid>
        </div>
    )
  }
}


class Murphys extends React.Component {

  render() {
    return (
        <div textAlign="center">
          <Reacthead></Reacthead>
          <Reactmain></Reactmain>
          <Reactfoot></Reactfoot>
        </div>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));
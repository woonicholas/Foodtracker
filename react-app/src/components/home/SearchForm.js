import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Input, Form, FormGroup, Label, Button, Row, Col, } from 'reactstrap';
import classnames from 'classnames'


function SearchForm (props) {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }

    return(
      <div className='col-md-4'>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' },"tab")}
              onClick={() => { toggle('1'); }}
            >
              Restaurant
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' },"tab")}
              onClick={() => { toggle('2'); }}
            >
              Recipes
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Form className='search' onSubmit={ e => props.onSubmitRestaurant(e)}>
              <FormGroup>
                <Label for='queryInput'>Search</Label>
                <Input type='text' className='form-control' id='queryInput' onChange={e => props.onChangeQuery(e)}/>
              </FormGroup>
              <FormGroup>
                <Label for='locationInput'>Location</Label>
                <Input type='text' className='form-control' id='locationInput' onChange={e => props.onChangeLocation(e)}/>
              </FormGroup>
              <Button className='btn btn-light mr-1' type='submit'>Search</Button> 
              <Button className='btn btn-success mx-1'>Randomize</Button>
            </Form>
          </TabPane>
          <TabPane tabId="2">
            <Form className='search' onSubmit={ e => props.onSubmitRecipe(e)}>
              <FormGroup>
                <Label for='queryInput'>Search</Label>
                <Input type='text' className='form-control' id='queryInput' onChange={e => props.onChangeQuery(e)}/>
              </FormGroup>
              <Button className='btn btn-light mr-1' type='submit' >Search</Button> 
              <Button className='btn btn-success mx-1' >Randomize</Button>
            </Form>
          </TabPane>
        </TabContent>
      </div>
    )
}
export default SearchForm
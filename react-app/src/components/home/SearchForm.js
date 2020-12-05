import { Input, Form, FormGroup, Label, Button } from 'reactstrap';
function SearchForm (props) {
    return(
      <Form className='col-md-4 search'>
        <FormGroup>
          <Label for='queryInput'>Search</Label>
          <Input type='text' className='form-control' id='queryInput' onChange={e => props.onChangeQuery(e)}/>
        </FormGroup>
        <FormGroup>
          <Label for='locationInput'>Location</Label>
          <Input type='text' className='form-control' id='locationInput' onChange={e => props.onChangeLocation(e)}/>
        </FormGroup>
        <Button className='btn btn-light mr-1'>Search</Button> 
        <Button className='btn btn-success mx-1'>Randomize</Button>
      </Form>
    )
}
export default SearchForm
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Dropdown, DropdownButton, Button } from 'react-bootstrap'
import './NewVideoForm.css'


const NewVideoForm = ({video, addVideoCallback}) => {
  const [startingInventory, setStartingInventory] = useState(0)
  const [addedToLibrary, setAddedToLibrary] = useState(false)

  const onAddToLibrary = (event) => {
    const newVideo = {...video}
    newVideo.inventory = event.target.value

    addVideoCallback(newVideo)
    setAddedToLibrary(true)
  }

  const showDropdown = () => {
    return (
      <div className='add-video-form'>
        <h4><label>Stock Video</label></h4>
        <div className='add-video-dropdown'>
          <DropdownButton title={startingInventory}>
            {[...Array(21).keys()].map(i => (
              <Dropdown.Item onSelect={(eventKey) => {setStartingInventory(eventKey)}} value={i} eventKey={i} >{i}</Dropdown.Item>
            ))}
          </DropdownButton> 

          <Button onClick={onAddToLibrary} value={startingInventory} variant="outline-secondary">Add to Library</Button>
        </div>

      </div> 
    )
  }


 return(
    <div>
      {addedToLibrary ? <Button variant="secondary" disabled>In Video Library</ Button> : showDropdown()}
    </div>
      
 )
}

NewVideoForm.propTypes = {
  video: PropTypes.object.isRequired,
  addVideoCallback: PropTypes.func.isRequired
}

export default NewVideoForm
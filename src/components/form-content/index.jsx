import React from 'react';
import TabPanel from '../tab-panel';

export default class FormContent extends React.Component {
  render(){
    const { categories, checkboxes } = this.props;

    return (
      <form action="#" id="cf7-form">
            <div className="tab-content">
                { categories.map( ({id, label}, index) =>
                  <TabPanel
                    id={id}
                    isActive={index === 0}
                    checkboxes={checkboxes.filter( checkbox => id === checkbox.category )} 
                    key={id}/>
                    )
                  }
            </div>
            <div className="form-group row">
                <div className="col-md-4">
                    <label>Email (required)
                        <input type="email" className="form-control" name="user_email[]" placeholder="Email" />
                    </label>
                </div>
                <div className="col-md-4">
                    <label>Business Name
                        <input type="text" className="form-control" name="user_buisness_name[]" />
                    </label>
                </div>
                <div className="col-md-4">
                    <label for="user_email">Business Category
                    <select className="form-control" name="user_business_category[]">
                        <option value="0">Choose a category</option>
                        <option value="Airport">Airport</option>
                        <option value="Arts/Entertainment/Nightlife">Arts/Entertainment/Nightlife</option>
                        <option value="Attractions/Things to Do">Attractions/Things to Do</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Bank/Financial Services">Bank/Financial Services</option>
                        <option value="Bar">Bar</option>
                        <option value="Book Store">Book Store</option>
                        <option value="Business Services">Business Services</option>
                        <option value="Church/Religious Organization">Church/Religious Organization</option>
                        <option value="Club">Club</option>
                        <option value="Community/Government">Community/Government</option>
                        <option value="Concert Venue">Concert Venue</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Event Planning/Event Services">Event Planning/Event Services</option>
                        <option value="Food/Grocery">Food/Grocery</option>
                        <option value="Health/Medical/Pharmacy">Health/Medical/Pharmacy</option>
                        <option value="Home Improvement">Home Improvement</option>
                        <option value="Hospital/Clinic">Hospital/Clinic</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Landmark">Landmark</option>
                        <option value="Lawyer">Lawyer</option>
                        <option value="Library">Library</option>
                        <option value="Local Business">Local Business</option>
                        <option value="Middle School">Middle School</option>
                        <option value="Movie Theater">Movie Theater</option>
                        <option value="Museum/Art Gallery">Museum/Art Gallery</option>
                        <option value="Outdoor Gear/Sporting Goods">Outdoor Gear/Sporting Goods</option>
                        <option value="Pet Services">Pet Services</option>
                        <option value="Professional Services">Professional Services</option>
                        <option value="Public Places">Public Places</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Restaurant/Cafe">Restaurant/Cafe</option>
                        <option value="School">School</option>
                        <option value="Shopping/Retail">Shopping/Retail</option>
                        <option value="Spas/Beauty/Personal Care">Spas/Beauty/Personal Care</option>
                        <option value="Sports Venue">Sports Venue</option>
                        <option value="Sports/Recreation/Activities">Sports/Recreation/Activities</option>
                        <option value="Tours/Sightseeing">Tours/Sightseeing</option>
                        <option value="Transportation">Transportation</option>
                        <option value="University">University</option>
                    </select></label>

                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <button type="submit" className="btn btn-default btn-large btn-block btn-primary">Submit</button>
                </div>
            </div>
      </form>
    );
  }
}

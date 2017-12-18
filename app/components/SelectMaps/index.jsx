import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class SelectMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      geocodeResults: null,
      loading: false,
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSelect(address) {
    this.setState({
      address,
      loading: true,
    });

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('Success Yay', { lat, lng });
        // this.setState({
        //   geocodeResults: this.renderGeocodeSuccess(lat, lng),
        //   loading: false,
        // });
      })
      .catch((error) => {
        console.log('Oh no!', error);
        // this.setState({
        //   geocodeResults: this.renderGeocodeFailure(error),
        //   loading: false,
        // });
      });

    /* NOTE: Using callback (Deprecated version) */
    // geocodeByAddress(address,  (err, { lat, lng }) => {
    //   if (err) {
    //     console.log('Oh no!', err)
    //     this.setState({
    //       geocodeResults: this.renderGeocodeFailure(err),
    //       loading: false
    //     })
    //   }
    //   console.log(`Yay! got latitude and longitude for ${address}`, { lat, lng })
    //   this.setState({
    //     geocodeResults: this.renderGeocodeSuccess(lat, lng),
    //     loading: false
    //   })
    // })
  }

  handleChange(address) {
    this.setState({
      address,
      geocodeResults: null,
    });
  }

  render() {
    const cssClasses = {
      root: 'form-group',
      input: 'Demo__search-input',
      autocompleteContainer: 'Demo__autocomplete-container',
    };

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div className="Demo__suggestion-item">
        <i className="fa fa-map-marker Demo__suggestion-icon" />
        <strong>{formattedSuggestion.mainText}</strong>{' '}
        <small className="text-muted">{formattedSuggestion.secondaryText}</small>
      </div>
    );

    const inputProps = {
      type: 'text',
      value: this.state.address,
      onChange: this.handleChange,
      onBlur: () => { console.log('Blur event!'); },
      onFocus: () => { console.log('Focused!'); },
      autoFocus: true,
      placeholder: 'Search Places',
      name: 'Demo__input',
      id: 'my-input-id',
    };

    return (
      <div className="page-wrapper">
        <div className="container">
          <PlacesAutocomplete
            onSelect={this.handleSelect}
            autocompleteItem={AutocompleteItem}
            onEnterKeyDown={this.handleSelect}
            classNames={cssClasses}
            inputProps={inputProps}
          />
        </div>
      </div>
    );
  }
}

export default SelectMaps;

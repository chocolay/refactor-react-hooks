### 1. Clone the Repository
``` 
git clone https://github.com/valentinogagliardi/refactoring-to-react-hooks-base.git

```

I renamed the repository for convenience .. . 

### 2. Create an HTML select component

```
src/common/components/SelectInput.js
```

keys in input object (the prop):
```
changer 
```
a function for action following the users selection

```id, label
```

specify the id for the select element and its label tag

```options 
```

An array of the strings to go into the drop-down list


These inputs are validated with prop-types

### 3. Create a React Component to ```fetch``` the data

```
/src/common/components/FetchAndList.js
```

Data from the API are stored in the variable ```data``` 
with the ```useState``` hook.

Data are ```fetch```ed with the ```useEffect``` hook

The incoming prop is just the API endpoint.

### 4. Create a container component for the two components 

``` 
/src/common/components/InitialData/FetcherContainer.js
```

The two components are imported
What's returned is html that displays the select input
and then an unordered list.

To avoid an error, this piece of code is only run if the 
selection is not the blank header.

This contains the ```changer``` function that responds to the users
change in the select input tag.

A label is selected and then the value assigned to the selected option is the endpoint
that will be used in the ```FetchAndList``` component.





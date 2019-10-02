# UserSearch

This web-app demonstrated how to search in an array of users. The search-query will
be defined in the App-component (textbox) and sent down (search-button) to the 
SearchResults component, where the results will be shown. The results are a filtered subset
of the users array, which will be saved in the SearchResult's state. The hint is,
that the SearchResult-component will only re-render when the search-query differs from
the last search-query. For this hint, component lifecycle methods will be used.

For this example, the following topics will be addressed:
- onChange/onClick-events
- subcomponents
- props
- component lifecycle-methods
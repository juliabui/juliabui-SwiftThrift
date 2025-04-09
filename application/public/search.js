console.log('Search.js loaded');

function searchApp() {
  console.log('searchApp function called');
  
  return {
    // Initialize all Alpine.js variables
    selectedCategory: '',
    searchQuery: '',
    categories: [],
    listings: [],
    resultsCount: 0,
    hasSearched: false,
    loading: false,
    
    // Initialize component
    init() {
      console.log('Alpine component initialized');
      this.fetchCategories();
      
      // Check URL parameters
      const params = new URLSearchParams(window.location.search);
      this.selectedCategory = params.get('category') || '';
      this.searchQuery = params.get('query') || '';
      
      if (this.selectedCategory || this.searchQuery) {
        this.performSearch();
      } else {
        this.loadAllListings();
      }
    },
    
    // Fetch categories from API
    fetchCategories() {
      console.log('Fetching categories...');
      fetch('/api/categories')
        .then(response => response.json())
        .then(data => {
          console.log('Categories loaded:', data);
          this.categories = data;
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    },
    
    // Search listings
    performSearch() {
      console.log('Performing search...');
      this.loading = true;
      this.hasSearched = true;
      
      // Update URL
      const params = new URLSearchParams();
      if (this.selectedCategory) params.set('category', this.selectedCategory);
      if (this.searchQuery) params.set('query', this.searchQuery);
      
      const newUrl = window.location.pathname + 
          (params.toString() ? '?' + params.toString() : '');
      
      window.history.pushState({}, '', newUrl);
      
      // Fetch search results
      fetch(`/api/listings/search?category=${encodeURIComponent(this.selectedCategory)}&query=${encodeURIComponent(this.searchQuery)}`)
        .then(response => response.json())
        .then(data => {
          console.log('Search results:', data);
          this.listings = data.listings || [];
          this.resultsCount = data.count || 0;
          this.loading = false;
        })
        .catch(error => {
          console.error('Error searching listings:', error);
          this.loading = false;
        });
    },
    
    // Load all listings
    loadAllListings() {
      console.log('Loading all listings...');
      this.loading = true;
      this.hasSearched = true;
      
      fetch('/api/listings')
        .then(response => response.json())
        .then(data => {
          console.log('All listings loaded:', data);
          this.listings = data.listings || [];
          this.resultsCount = data.count || 0;
          this.loading = false;
        })
        .catch(error => {
          console.error('Error loading listings:', error);
          this.loading = false;
        });
    },
    
    // Helper functions
    formatPrice(price) {
      return parseFloat(price).toFixed(2);
    },
    
    getSellerName(listing) {
      if (!listing.seller_firstName) return 'Unknown Seller';
      return `${listing.seller_firstName} ${listing.seller_lastName ? listing.seller_lastName.charAt(0) + '.' : ''}`;
    }
  };
}
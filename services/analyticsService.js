import ReactGA from 'react-ga'

class AnalyticsService {
	constructor(trackingId) {
		this.trackingId = trackingId
	}
	initialize = () => {
		ReactGA.initialize(this.trackingId)
	}

	trackPage = (path) => {
		ReactGA.set({ page: path })
		ReactGA.pageview(path)
	}
}

// This trackingId should probably be kept as a secret.
// Might be a bit difficult as we're building this statically
// and cannot inject it in while building it.
const analyticsService = new AnalyticsService('UA-149172193-1')

export default analyticsService

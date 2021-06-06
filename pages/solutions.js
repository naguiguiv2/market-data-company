import React from 'react'
import {
    Layout,
    // Modal,
    // ThankYou,
    // ResearchPdfForm,
    // StartDownloadForm,
    // ContactFooter
} from '../components'
import {
    Landing,
    Benchmarking,
    BigBloom,
    DataAudit,
    ExpertWitness,
    MarketDataAnalysis,
    Radr,
    NavBar
} from '../sections/solutions-section'

// import pdfMapper from '../utils/pdfMapper'

// // Utils
// import { validateEmail } from '../utils/validator'
// import { sendEmail } from '../services/apiService'

// import { useStore } from '../store/useStore'
// import { USER_SIGNED_UP } from '../store/actionTypes'

// import styled from 'styled-components'
// import breakpoint from 'styled-components-breakpoint'

// const ContentWrapper = styled.div`
// 	max-width: 1200px;
// 	padding: 0 20px;
// 	margin: 0 auto;

// `

const Solutions = () => {
    return (
        <Layout>
            <Landing />
            <NavBar />
            <Benchmarking />
            <BigBloom />
            <DataAudit />
            <ExpertWitness />
            <MarketDataAnalysis />
            <Radr />
        </Layout>
    )
}

export default Solutions

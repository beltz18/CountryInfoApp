'use server'

import { permanentRedirect } from 'next/navigation'

const pageCountry = () => permanentRedirect('/')

export default pageCountry
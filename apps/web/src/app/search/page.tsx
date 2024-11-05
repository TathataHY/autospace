'use client'

import { FormProviderSearchGarage } from '@autospace/forms/src/searchGarages'
import { SearchPage } from '@autospace/ui/src/components/templates/SearchPage'

export default function Page() {
  return (
    <FormProviderSearchGarage>
      <SearchPage />
    </FormProviderSearchGarage>
  )
}

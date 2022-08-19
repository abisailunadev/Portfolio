import { configureStore } from '@reduxjs/toolkit'
import isEnglishSlice from './slices/isEnglish.slice'

export default configureStore({
    reducer: {
      isEnglish: isEnglishSlice
    }
})

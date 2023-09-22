import { View } from 'react-native'
import { NotFound } from '../../atoms/NotFound'

export default function Home() {
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center'
      }}
    >
      <NotFound />
    </View>
  )
}

import { StyleSheet } from 'react-native'
import { AppColors } from '../../config/colors'

export const styles = StyleSheet.create({
  keepConnectedContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4
  },
  passwordInputContainer: {
    gap: 6
  },
  text: {
    alignSelf: 'flex-end',
    marginRight: 8,
    color: AppColors.dark,
    fontSize: 8
  },
  wrapper: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  }
})

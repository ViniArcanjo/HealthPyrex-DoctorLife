import { StyleSheet } from 'react-native'
import { AppColors } from '../../config/colors'

export const styles = StyleSheet.create({
  checkbox: {
    width: 12,
    height: 12
  },
  checkboxText: {
    fontSize: 10
  },
  keepConnectedContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 4,
    marginLeft: 8
  },
  passwordInputContainer: {
    gap: 6
  },
  passwordText: {
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

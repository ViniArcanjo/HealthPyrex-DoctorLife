import { StyleSheet } from 'react-native'
import { AppColors } from '../../../config/colors'

export const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    right: 10
  },
  input: {
    padding: 10,
    borderWidth: 0,
    borderColor: 'transparent'
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    width: 256,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: AppColors.light
  },
  text: {
    marginLeft: 8,
    color: AppColors.dark,
    fontSize: 20,
    fontWeight: 'bold'
  },
  wrapper: {
    alignItems: 'flex-start',
    gap: 6
  }
})

import { styles } from './index.style'

import { useState } from 'react'
import { FlatList, View } from 'react-native'

import { Input } from '../../atoms/Input'
import ItemList from '../../molecules/ItemList'

const profiles = [
  {
    key: '1',
    exame: 'Oftalmológista',
    doctor: 'Frank Gualberto',
    date: '01/11/2023'
  },
  {
    key: '2',
    exame: 'Hemograma',
    doctor: 'Neli Knupp',
    date: '05/10/2023'
  },
  {
    key: '3',
    exame: 'Exame de urina',
    doctor: 'Iára Linhares',
    date: '19/11/2023'
  },
  {
    key: '4',
    exame: 'Exame de glicemia',
    doctor: 'Adso da Souza',
    date: '22/11/2023'
  },
  {
    key: '5',
    exame: 'TSH',
    doctor: 'Maria Eliza',
    date: '04/09/2023'
  },
  {
    key: '6',
    exame: 'TSH',
    doctor: 'Maria Eliza',
    date: '04/09/2023'
  },
  {
    key: '7',
    exame: 'TSH',
    doctor: 'Maria Eliza',
    date: '04/09/2023'
  },
  {
    key: '8',
    exame: 'TSH',
    doctor: 'Maria Eliza',
    date: '04/09/2023'
  },
  {
    key: '9',
    exame: 'TSH',
    doctor: 'Maria Eliza',
    date: '04/09/2023'
  },
  {
    key: '10',
    exame: 'TSH',
    doctor: 'Maria Eliza',
    date: '04/09/2023'
  }
]

const Appointments = () => {
  const [profilesList, setProfilesList] = useState(profiles)

  const onSearch = value => {
    setProfilesList(profiles)

    if (value) {
      const newList = profiles.filter(
        q =>
          q.exame.toLocaleUpperCase().includes(value?.toLocaleUpperCase()) ||
          q.doctor.toLocaleUpperCase().includes(value?.toLocaleUpperCase())
      )

      setProfilesList(newList)
    }
  }

  return (
    <View style={styles.container}>
      <Input placeholder="Buscar" onSearch={onSearch} />

      <FlatList
        data={profilesList}
        renderItem={({ item }) => (
          <View style={styles.itemContent}>
            <ItemList
              exame={item.exame}
              doctor={item.doctor}
              date={item.date}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Appointments

import { StyleSheet, View, Text } from 'react-native'
import { GlobalStyles } from '../../constants/styles'

import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

const ExpensesOutput = ( { expenses, expensesPeriod, fallbackText }) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>

  if(expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses}/>
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24, 
    paddingtop: 24, 
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  }, 
  infoText: {
    color: 'white', 
    fontSize: 16, 
    textAlign: 'center', 
    marginTop: 32,
  }
})
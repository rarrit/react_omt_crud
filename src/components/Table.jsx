const Table = ({
  tableProps,
  items,
  List,
  onDelete,
}) => {
  // 메달 순위 측정
  const sortedItems = items.sort((a, b) => {
    if (b.countryMedalGold !== a.countryMedalGold) {
      return b.countryMedalGold - a.countryMedalGold;
    }
    if (b.countryMedalSilver !== a.countryMedalSilver) {
      return b.countryMedalSilver - a.countryMedalSilver;
    }
    return b.countryMedalBronze - a.countryMedalBronze;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>{tableProps.th_01}</th>
          <th>{tableProps.th_02}</th>
          <th>{tableProps.th_03}</th>
          <th>{tableProps.th_04}</th>
          <th>{tableProps.th_05}</th>
        </tr>
      </thead>
      <tbody>
        {
          sortedItems.length === 0 ? (
            <tr>
              <td colSpan="5">등록된 메달이 없습니다.</td>
            </tr>
          ) : (
            // countrys 의 메달 값을 비교한 후 로직 실행
            sortedItems.map(country => {
              return (
                <List
                  key={country.id}
                  country={country}
                  onDelete={onDelete}
                />
              )
            })
          )
        }
      </tbody>
    </table>
  )
}

export default Table

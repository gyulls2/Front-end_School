export default function ListItem({item}) {
  return (
    <tr>
      <th>name : {item.name}</th>
      <td>{item.price}원</td>
    </tr>
  );
}

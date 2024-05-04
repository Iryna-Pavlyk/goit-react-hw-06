import { useSelector, useDispatch } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

// const filterValues = items.filter((item) =>
//   item.name.toLowerCase().includes(filter.toLowerCase())
// );

const ContactList = () => {
  const items = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);
  // const dispatch = useDispatch();
  // const filteredContacts = dispatch(changeFilter(items.filter((item) =>
  // item.name.toLowerCase().includes(filter.toLowerCase()))));

  return (
    <div>
      <ul className={css.list}>
        {items.map((item) => {
          return (
            <li className={css.item} key={item.id}>
              <Contact item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactList;

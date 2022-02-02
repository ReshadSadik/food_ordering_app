import useAuth from '../../../hooks/useAuth';
import Item from '../Item/Item';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Items = () => {
  const { items } = useAuth();
  return (
    <div
      data-aos="fade-right"
      className="d-flex mt-5 gap-4 flex-wrap justify-content-center"
    >
      {items.length &&
        items.map((item) => (
          <div>
            <Item item={item}></Item>
          </div>
        ))}
    </div>
  );
};

export default Items;

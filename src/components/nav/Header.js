import React,{useState} from "react";
import { Menu } from 'antd';
import { GlobalOutlined,LinkedinOutlined,InstagramOutlined,FacebookOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const Header = ()=>{

    const [current,setCurrent]=useState("Home");

    const handleClick=(e)=>{
        setCurrent(e.key);
    }

    return(
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
          
        <Menu.Item key="home">
          <Link to="/"> <img height="35px" src="https://snipstock.com/assets/cdn/png/8abb4818a77321630f8b18c4e4e9959f.png"></img> Home</Link>
        </Menu.Item>
        <Menu.Item key="about" >
          <a href="https://www.thesparksfoundationsingapore.org/" target="_blank"><img height="50px" src="https://www.thesparksfoundationsingapore.org/images/logo_small.png"></img> The Spark Foundations</a>
        </Menu.Item>
        <SubMenu className="ml-auto" key="SubMenu" icon={<GlobalOutlined />} title="Follow Us!">
         
            <Menu.Item key="link" className="text-primary" icon={<LinkedinOutlined />}>
            <a href="https://www.linkedin.com/company/the-sparks-foundation/mycompany/" target="_blank" className="text-primary"> LinkedIn</a>
            </Menu.Item>
            <Menu.Item key="insta" className="text-warning" icon={<InstagramOutlined />}>
            <a href="https://www.instagram.com/thesparksfoundation.info/?hl=en" target="_blank" className="text-warning">Instagram</a>
            </Menu.Item>      
          
            <Menu.Item key="fb" className="text-primary" icon={<FacebookOutlined />}>
            <a href="https://www.facebook.com/thesparksfoundation.info/" target="_blank" className="text-primary">Facebook</a>
            </Menu.Item>
            
          
        </SubMenu>
        
      </Menu>
    )

}

export default Header;

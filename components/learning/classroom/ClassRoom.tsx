import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Sticky from 'react-stickynode';
import MenuWrapper, { Menu, MenuItem, MenuLink } from "../../SideMenu/SideMenu.styled";
import {gql, useQuery} from "@apollo/client";


type MenuProps = {
    className?: string;
    onClick?: () => void;
};


const GET_CLASSROOMS = gql`
	query MyClassRoom($id: String!) {
  classRoomsTeacher(teacherID: $id) {
   title
    classRoomID
  }
}
`;


const ClassRooms = ({ className = '', onClick }: MenuProps) => {
    const {query} = useRouter();


    const pathname = ""
    let classRooms = []

    const { data, loading, error, fetchMore } = useQuery<{ classRoomsTeacher: { title: string; classRoomID: string }[] }>(GET_CLASSROOMS, {
        variables: { id: '3cd7be2c-56c3-4c6b-bb55-76810decc9f7' },
        notifyOnNetworkStatusChange: true,
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No data available</p>;

    const { classRoomsTeacher } = data;

     classRooms =  classRoomsTeacher







    return (
        <Sticky top=".navbar" innerZ="1">
            <MenuWrapper className="side-menu-wrapper">
                <Menu className={`side-menu ${className}`}>
                    {classRooms.map((item) => {
                        console.log(pathname , item.classRoomID)

                        return (
                            <MenuItem key={`side-menu--key${item.classRoomID}`} onClick={onClick}>
                                <Link href={"/classrooms/"+item.classRoomID}>
                                    <MenuLink className={query.classRoomID == item.classRoomID ? 'active' : ''}>
                                        {item.title}
                                    </MenuLink>
                                </Link>
                            </MenuItem>
                        );
                    })}
                </Menu>
            </MenuWrapper>
        </Sticky>
    );
};

export default ClassRooms;

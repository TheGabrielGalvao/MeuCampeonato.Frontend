import { Card, Typography, List, ListItem } from "@material-tailwind/react";
import { useAuth } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export function SidebarMenu() {
  const { logout } = useAuth();

  return (
    <Card className="h-[calc(100vh-2rem)] max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Meu Campeonato
        </Typography>
      </div>
      <List className="flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              clsx(
                {
                  " bg-active": isActive,
                  " bg-transparent": isPending,
                },
                "rounded-md"
              )
            }
          >
            <ListItem>Championship</ListItem>
          </NavLink>
          <NavLink
            to="/history"
            className={({ isActive, isPending }) =>
              clsx(
                {
                  " bg-active": isActive,
                  " bg-transparent": isPending,
                },
                "rounded-md"
              )
            }
          >
            <ListItem>History</ListItem>
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive, isPending }) =>
              clsx(
                {
                  " bg-active": isActive,
                  " bg-transparent": isPending,
                },
                "rounded-md"
              )
            }
          >
            <ListItem>Teams</ListItem>
          </NavLink>
        </div>

        <ListItem onClick={logout}>Log Out</ListItem>
      </List>
    </Card>
  );
}

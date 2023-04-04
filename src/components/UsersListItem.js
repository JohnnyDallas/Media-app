import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import Expandablepanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

function UserListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    };

    const header = <>
        <Button className='mr-3' loading={isLoading} onClick={handleClick}>
            <GoTrashcan />
        </Button>
        {error && <div>Error deleting user.</div>}
        {user.name}    
    </>;

    return (
      <Expandablepanel header={header}>
        <AlbumsList user={user} />
      </Expandablepanel>   
            
  );
}

export default UserListItem;
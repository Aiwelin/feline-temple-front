const Notification: React.FC = () => {
    const user = { name: 'Amandine', lastName: 'PICHARD', avatar: null }
    return (
        <div id='form-profil'>
            <div id='form-name-profil'>
                <img key={user.avatar} src={user.avatar} />
                <p>`{user.name} {user.lastName}`</p>
            </div>
        </div>
    )
}



export default Notification;
const app = new Vue({
    el: "#app",

    data: {
        userList: globalUserslList,
        selectedUser: {},
        searchText: ""
    },

    computed: {
        selectedUserLastAccess() {
            const receivedMessages = this.selectedUser.filter((msg) => msg.status === 'received');
            const lastMsgDate = [receivedMsgs.length - 1].date;

            return this.formatTime(lastMsgDate);
        },
        filteredUserList(){

        }
    },


    methods: {
        getAvatarPath(avatarId) {
            return `imgs/avatar${avatarId}.jpg`;
        },

        onUserClick(user) {
            this.selectedUser = user;
        },

        formatTime(stringDate) {
            return moment(stringDate, "DD/MM/YYYY HH:mm:ss").format("HH:mm")
        },

        onImput() {
            console.log("input");
        },
    },
        
    mounted() {
        this.selectedUser = this.userList[0];
    }
    
})
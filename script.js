const app = new Vue({
    el: "#app",

    data: {
        userList: globalUserslList,
        selectedUser: {},
        searchText: "",
        newMsgText: "",
        showSendIcon: false,
        filteredUsersList: []
    },

    computed: {
        selectedUserLastAccess() {
            const receivedMessages = this.selectedUser.filter((msg) => msg.status === 'received');
            const lastMsgDate = [receivedMsgs.length - 1].date;

            return this.formatTime(lastMsgDate);
        },

        filteredUserList() {
            return this.userList.filter((element) => {
                return element.name.toLowerCase().startWith(this.searchText.toLowerCase());
            });
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

        sendMessage() {
            const newMessage = {
                date: moment().format("DD/MM/YYYY HH:mm:ss"),
                text: this.newMsgText,
                status: 'sent'
            };

            const currentUser = this.selectedUser;

            currentUser.messages.push(newMessage)

            this.newMsgText = "";

            this.scrollToBottom();

            setTimeout(() => {
                const newRespMsg = {
                    date: moment().format("DD/MM/YYYY HH:mm:ss"),
                    text: "Tutto Ok",
                    status: 'received'
                };

                currentUser.messages.push(newRespMsg);

            },5000);
        },

        scrollToBottom() {
            this.$nextTick(() => {
                const htmlElement = this.$refs.chatContainerToScroll;

                htmlElement.scrollTop = htmlElement.scrollHeight;

            });

        },
        
        mounted() {
            this.selectedUser = this.userList[0];
        }

    }
})

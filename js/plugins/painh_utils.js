Window_ActorCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addSkillCommands();
        this.addGuardCommand();
        this.addItemCommand();
    }
};
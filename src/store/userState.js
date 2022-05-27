import { makeAutoObservable, runInAction } from "mobx";
import { login, logout, me, signUp, updateUser } from "../service/userService";

class UserState {
  data = null;
  loading = false;
  updating = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  loadData() {
    const localData = JSON.parse(localStorage.getItem("AUTH_DATA") || "");
    console.log("localData", localData);
    runInAction(() => {
      this.data = localData?.user;
    });
  };

  async me(email) {
    try {
      this.loading = true;
      const { data } = await me(email);
      runInAction(() => {
        this.data = data;
      });
    } catch (e) {
      runInAction(() => {
        this.error = e;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  async updateUser(newData) {
    try {
      this.updating = true;
      const { data } = await updateUser(newData);
      runInAction(() => {
        this.data = data;
      });
    } catch (e) {
      runInAction(() => {
        this.error = e;
      });
    } finally {
      runInAction(() => {
        this.updating = false;
      });
    }
  };

  async signUp(values) {
    try {
      this.loading = true;
      const { data } = await signUp(values);
      runInAction(() => {
        this.data = data.user;
        this.loading = false;
      });
      localStorage.setItem("AUTH_DATA", JSON.stringify(data));
    } catch (e) {
      runInAction(() => {
        this.error = e;
        this.loading = false;
      });
    }
  }

  async login(values) {
    try {
      this.loading = true;
      const { data } = await login(values);
      runInAction(() => {
        this.data = data.user;
        this.loading = false;
      });
      localStorage.setItem("AUTH_DATA", JSON.stringify(data));
    } catch (e) {
      runInAction(() => {
        this.error = e;
        this.loading = false;
      });
    }
  }

  logout = async () => {
    try {
      this.loading = true;
      await logout();
      localStorage.clear();
      window.location.reload();
      this.loading = false;
    } catch (e) {
      this.loading = false;
      this.error = e;
    }
  };
}

export default new UserState();

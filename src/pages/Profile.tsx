import EditPencil from '../assets/images/editPencil.svg?react'
import DefaultAvatar from '../assets/images/defaultAvatar.svg?react'
import { Link } from 'react-router-dom'
import { PATHS } from '../paths'
import userProfileStore from '../store/userProfileStore'
import { Button } from '../components'

const Profile = () => {
  const userData = userProfileStore((state) => state)
  const userInfo = userData.userInfo

  return (
    <>
      {!userData.isLoading && (
        <div className="text-grey-800 text-b-2 mx-auto">
          <div className="mt-24 flex justify-between">
            <h1 className="tex-grey-950 mb-12 ml-[8.33%] text-h3 font-medium">Мій профіль</h1>
            <Link to={PATHS.PROFILE.edit}>
              <button className="mr-[120px] h-[48px] w-[48px] rounded-full bg-grey-50 hover:bg-grey-100 active:bg-grey-200">
                <EditPencil className="hover:text-secondary-blue-400 active:text-secondary-blue-800 m-auto text-secondary-blue-200" />
              </button>
            </Link>
          </div>
          <div className="ml-[15.42%] flex max-w-[76.25%] gap-[32px]">
            <div className="h-[285px] w-[285px] flex-shrink-0">
              {userInfo.user_photo ? (
                <img
                  className="h-full w-full rounded-[25px] object-cover object-[50%_20%]"
                  src={userInfo.user_photo as string}
                />
              ) : (
                <div className="flex h-full items-center justify-center rounded-[20px] bg-grey-100">
                  <DefaultAvatar className="text-primary-900" />
                </div>
              )}
            </div>
            <div>
              <p>{`${userInfo.first_name} ${userInfo.last_name}`}</p>
              <br />
              <p>{userInfo.email}</p>
              <br />
              {userInfo.phone_number && <p> {userInfo.phone_number}</p> && <br />}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem,
                perspiciatis recusandae iusto magnam unde tempore sequi, dolor adipisci quas eveniet
                consequatur facilis nostrum nam ratione quasi suscipit praesentium similique. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Praesentium nesciunt at optio
                aut aliquid ea consequatur voluptatum sit ad sequi dolorum nam tempore assumenda,
                quo quidem! Ea, quidem nihil! Accusantium! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Autem aliquam nesciunt earum maxime labore iure et quas voluptate
                voluptatibus? Totam unde adipisci obcaecati repudiandae, alias vitae nam impedit ab
                aperiam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
                doloremque? Totam architecto tenetur molestias labore cupiditate facere nostrum
                reiciendis tempora incidunt doloremque facilis nihil quaerat est, similique vel
                ipsam. Quod? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
                iusto obcaecati aut laborum distinctio? Recusandae veniam temporibus at possimus
                eveniet molestias, quibusdam laboriosam ullam ipsum autem omnis, accusantium facilis
                reiciendis.
              </p>
              <br />
              {userInfo.location && <p>{userInfo.location}</p> && <br />}
              <section>
                <p>Соціальні мережі:</p>
              </section>
            </div>
          </div>
          <div className="m-auto flex max-w-[94%] justify-between">
            <Link to={PATHS.PROFILE.changePassword}>
              <Button className="custom-button">Редагувати пароль</Button>
            </Link>
          </div>
          <section className="pt-[2.78%]">
            <div className="mb-[4.25rem] p-[0.625rem] font-medium">Мої оголошення</div>
          </section>
        </div>
      )}
    </>
  )
}

export default Profile

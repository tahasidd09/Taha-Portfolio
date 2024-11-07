const projects = [
    {
      title: 'Hackathon',
      description: '(Server Management) SaaS Company built for the sneaker reselling industry to allow users to mass enter raffles through the use of HTTP requests and more!',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGjCD8dtAHGYE-3ccQRmxKdIZisSn4UvEcPyL3HidsX-cTPNtBEJHXxfrV4f7JQxc9sQ&usqp=CAU=',
      caseStudyUrl: 'https://github.com/tahasidd09/hackathon'
    },
    {
      title: 'Milestone Github',
      description: '(Founder + Developer) SaaS company built in the sneaker reselling industry consisting of tools to simplify user experience and increase effiency. Check Out Repo and Live website here!',
      imageUrl: 'data:image/png;base64,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',
      caseStudyUrl: 'https://github.com/tahasidd09/milestone4',
    },
    {
      title: 'Typescript Project',
      description: 'Simple website I made for free to improve on current outdated website for my church!',
      imageUrl: 'https://flamingtext.com/net-fu/proxy_form.cgi?script=neon-logo&text=TypeScript&imageoutput=truedata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAkFBMVEX///8XFRYiIiIAAAAfHx8oKCgMDAwQEBAcHBwUFBShoaGcnJwXFxcZGRnr6+sTExNKSkqOjo7CwsL19fVFRUXe3t7i4uLt7e14eHhAQECCgoLS0tLLy8tvb2+pqaldXV1mZmYvLy+EhIS3t7c4ODiurq6SkpJnZ2fPz898entgXl87OztVVVUHAAVEQkNMSUp/aAaiAAAJtklEQVR4nO2ca6OqKhCGSxTsYlZk95vda9Ve///fHVFQUEytdXat3TyfSoH0FYaZAavVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBvQQWvvpD3hnb6h0XXQhH+dXHod159Te/JqH/+wzTCpB5BMPv6PZ1DF0sxGwcdCtezBIr509mrL++d2HYRIhqleBdDqNt/9SW+C9udtk+p/esL5AqYDQqliuS6Dl99qS+nV0oqxg21Xn2xr8UboJJSMdD3J3euLblV0CpQq/65lutwZwrUg1Hz1Rf9Is5VhiDHRb1XX/ZLWDygVQDavPrCX8CDWn2kWodHtQrU+jS7tU20IuWsvFQMfdac6MW5hTrZGfoQWuaGkLVLqqBP8rfon9i/Qhs68pYrdG9UInTZDykdx2Vu36++g79IL5EGRekXb4yEfi7B+IaTrofQ2QvL9KVanxP5zKRuhMRB74IwjlKk39fLdeCHn4NDRzHmRmYsoIu8wl+h822rt9kcmtv+bx613cREYWlA9a0/h62X5EWpt+19+fOkwCSph1b3f2K0HIRZV9eNEq7X5ajctdGZx5jJ6VnqZY/p6ETlip9jBbZyxzpXqLiWIsm7MyI9EGQbMjaK+2Jnu79zOy2+AiAHClN+rMhlafNyP5nY9SVfoVL0MpZUxt38ct4EmUYaxNc+QjUuuf2shcPSRBGrER7DRWJZ0a/iHxRL7ljV3HHF6c/vWifHyUhlmFZ0shXqSAZ5ld9MLF92qtCiQs2VnNC5XXNKDR07q5XhRuN9ZEc3hLY5td9LrJniUWG/QtWd4uvnTYhduV+Ztm2akjpzxLWbhl87q4hpXPu9xBqr7icqvyroqX5+jrlrolioYB60JpNdYNyRy01WSiwPOww3GZXvJRZy5Tsu4zAJTmpV4ugKUV/YdtdoibaH/TMftNTkwzCyeF47/GYns8VbidVPdaw826Fjmaqru6i96Fg51nDJDLyJuXZvLpaaHq1k31MWXj8OV9xi4TwHbhmEBs6YD/43F2snGx73Vm3jx1CdHL6yJTpGdMH2JNcWjk7zOPx5b7GGSvaqctJTTa+ibIE+H4Ulh/fQ+Z/EGs36+/38ycBHNVkVrHuE6negU6bAgUQToZ/XsVqXNWMVdi6vyQetdWTH9rViseaLCPEwDtHXM/s9LhY59VdWGJE2Jk8ldVvy3eJcPzqXttIx95nzi2hctXNt4YCEzkIwGw4vFsHCzWizY8zMCbEOUp2NJFYLtRnC2NIdYV/dMB3JxTIs7PBPNto9scNMjViqRNG6+tlRfLULRkzXFq7DNh1Ahr4XF8scLBImpiRWdL4xjpqjk6g9Ioslt+uQx7eXXZVYp3onVXrmLZOnoTvFjarRoUQYPMtiqVopYhlmO4HffGmxFBoFyaQ7DBSxqi887JVhPEmfHvHrFcZwgSTC0mXF0lBFLNOMP2ssazmoEt490IySsiBWRizhZXHnYNxO7tUepMVykpDbZjbrp8SyMfJ3jmioUc2XlG7GV8SaF9e4K1Ym4Bm5KbEa+WKdutdrV5jkK2P5M2LZg+ZwREciSM2fmYvEshSxnhyGdTfTPikvFsNzpFMhPyCWwydAoZb7oJOaEis79RfRVMRqZNrnczYqMQwZwoPPiuXgBLuaWG2ehqWGOttUharD8FBcI0VPGYZm+nRs4Lk1XLAUjP2AWM56vxTsV/ZDYol+Xej550C/lNlwXLkBec2iTjKZQ/rFxeJ9tslMEdenkliqU+o+JpaurSp0ZbHuLTrkYJD79a+REXJld3WGHhArL9ypIlZT01YVLkqSBZdczIvpFCV4eM+3ZRnnrxJr+aRYG/Vuq5o+dTLULOLzh2nIIfrLxGo+OQz3z+T+arVvJQ2vycPMxHQthZ3Pi/WczXrUwNdOqczwM8m/umbnEf3ic58UHbxMrF7k9VVKnSs3Y6jLWdXmw7W6E1yT/KttuFtquvFAvCdW5JdVF6tdRiw+2+DqgQqnm1rPquLdphY7bhdNGc+NU0kt3m2Le5ZpxPVLiuXwXIJGLNPh4U2HZ3vshzfxtNQbxlb5wKljpYRe6kqNedcKbo5cz5vNeb0zc8XqCOc8tsFFYvEZzmiEY2t44L+lhDuH8CnRNX8Su4oSJXipLX4obxU+A72mq2oNXsdIVu/thus24qylRqyaWGXEg/F4wSbXIrFEkt9sr6fjlS0iSSXrgBvX8Xnh87i0Ud31jvFJWq1yzlanm9Iqz6Xtp/NUQjmdWBex1m+3G+hYKxarY4tEldOIn0M6n2U67YZIGRoP5FZiUuMwUMsv421tjUw97SisMfdEl7HUiyUrGybui8SqHRuZljNiZX/2QSi/6TB5GXURtC5a5ZldM6/5uPm7JPrYzV60iXcasWrd5N7LiTVLPYooTpfEIsp5s/IKlsIxlIgtNsw2N8yF+97mG/rR8kuz9/vemiMdY2zL12zaGI/D4T5wTEYsVhDai4JcrPA8lsU6k6hO5FzuUbJNx2yj64q1GCbQLJt9avnSrkPnYScrIjLx+A+tjabeN+9nONCrt/VS5ouOZsvpl36b/P298MPDwEa4wVa42i7GRrfJm16YFsONfVbas1jBdgOHTl+zHZ535Eiq54TH2nzcn7oEuaxhgox1v7Z0Dcsy2GQzMVjLtNacEOy2A7sVzMfPrk6vQ4FuVvBwT/NkBYMtS6ZsNmVblvUvFBS7s8N+67y4rFbHc1P+e4hOiPxUKCu4ODej/0SIzisTLU0f85bn42q16EXtDkV7NG7Z208X6+N5+fxCvidMVbM2W1JpHxGpp52BTtqqx0Xxw57eL0OkHth4bkr7iDSZ07x3Eh9Isv5SRCaeOJ3aykv00JihmV4svPucvxERQV64fj8/R2bJRToF9GI94+j9OqZCrU7gd81PV2bc62udAl3tTPhR7/5S/hcF7K5pbXYYnraz0VJns4+a9/PTk+a/ztDk7ijzb4dT6qF5Z6XzdTVvB2Ojaur+t3OK4hds8O6UlzLNioXxj75J9CvoRw4WNu/HAxmxyEcZdwFXi6DBMuoqns7fTdss/JFasXQv5vePiGnZRLvWkxIL3x7d7fTb8SwxxlxCiD7cU9cokP8pUU6W0Up+w6RQLBetP8dx19BCiRjaYSiJhW6f9u8XabxunAO9LxZGWj/sw9hbXC6tWHwnCUH+cynHfwXaqodyacUK323CyG5+tLWSoUv2L6Voqjm1QOyfSqvvp/ynmU197VTXWfkb+E9XAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+Zf4DnIOyIcvCVlYAAAAASUVORK5CYII=',
      caseStudyUrl: 'https://github.com/tahasidd09/Exersice-with-Typescript-and-Node.js',
    },
  ];

  const PreviousWork: React.FC = () => {
    return (
      <div id='previouswork' className="bg-transparent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center mb-20">Previous Projects</h2>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#0a0a0a]">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={project.imageUrl} alt={project.title} />
                </div>
                <div className="flex-1 bg-transparent p-6 flex flex-col justify-between pw-bg">
                  <div className="flex-1">
                    {project.caseStudyUrl !== '#' ? (
                      <a href={project.caseStudyUrl} target='_blank' rel='noopener noreferrer'>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-gray-300">{project.title}</p>
                          <p className="mt-3 text-base text-gray-300">{project.description}</p>
                        </div>
                      </a>
                    ) : (
                      <a>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-gray-300">{project.title}</p>
                          <p className="mt-3 text-base text-gray-300">{project.description}</p>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PreviousWork;
  